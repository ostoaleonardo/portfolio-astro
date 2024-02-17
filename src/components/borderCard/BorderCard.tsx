import { useTitleStore } from "@/store/titleStore";

interface Props {
  size?: "small" | "medium";
  title?: string;
  subtitle?: string;
  titleTop?: string;
  titleBottom?: string;
  children: React.ReactNode;
}

export default function BorderCard({ size = "medium", title, subtitle, titleTop, titleBottom, children }: Props) {
  const { setTitle, setSubtitle, resetTitle } = useTitleStore(state => state)

  const sizeVariants = {
    small: "w-auto h-full aspect-square",
    medium: "w-auto h-full aspect-[2/1]",
  };

  const handleMouseEnter = () => {
    setTitle(title)
    setSubtitle(subtitle || "")
  }

  const handleMouseLeave = () => {
    resetTitle()
  }

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center ${sizeVariants[size]} group`}
    >
      <div
        className="w-full h-full flex border-4 border-transparent group-hover:border-white overflow-hidden"
      >
        {children}
      </div>

      {
        titleTop && (
          <span className="absolute left-3 top-2 group-hover:hidden font-archivo-black text-sm sm:text-xl md:text-2xl xl:text-4xl text-white/80 uppercase">
            {titleTop}
          </span>
        )
      }

      {
        titleBottom && (
          <span className="absolute left-3 bottom-2 group-hover:hidden font-archivo-black text-sm sm:text-xl md:text-2xl xl:text-4xl text-white/80 uppercase">
            {titleBottom}
          </span>
        )
      }
    </article>
  )
}
