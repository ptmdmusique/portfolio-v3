// import { Button } from "ducduchy-react-components";
import Link from "next/link";
// import { useTheme } from "../stores";

export default function Home() {
  // const { setTheme, theme } = useTheme();

  return (
    <div>
      Hello World.{" "}
      {/* <Button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle theme
      </Button> */}
      <br />
      {/* <Link href="/about" className="text-skin-base">
        About
      </Link> */}
      {/* <p>
        {theme === "light" ? (
          <span className="text-skin-base">Light theme</span>
        ) : (
          <span className="text-skin-base">Dark theme</span>
        )}
      </p> */}
    </div>
  );
}
