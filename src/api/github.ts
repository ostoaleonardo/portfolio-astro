const TOKEN = import.meta.env.GITHUB_TOKEN
const ENDPOINT = 'https://api.github.com/graphql'
const QUERY = `
query($userName:String!) {
    user(login: $userName){
        contributionsCollection {
            contributionCalendar {
                totalContributions
                weeks {
                    contributionDays {
                        contributionCount
                        date
                    }
                }
            }
        }
    }
}
`

export const retrieveContributionData = async () => {
    const variables = `{"userName": "ostoaleonardo"}`
    const body = {
        query: QUERY,
        variables
    }
    const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(body)
    })

    const data = await res.json()
    return formatData(data)
}

const formatData = (data: any) => {
    const { weeks } = data.data.user.contributionsCollection.contributionCalendar
    const contributions: any[] = []

    weeks.map((week: any) => {
        week.contributionDays.map((day: any) => {
            contributions.push(day)
        })
    })

    return contributions
}
