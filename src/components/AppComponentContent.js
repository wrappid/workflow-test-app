import {
  CoreBox,
  CoreClasses,
  CoreContainedButton,
  CoreContainer,
  CoreCssBaseline,
  CoreDivider,
  CoreGrid,
  CoreH3,
  CoreH5,
  CoreImage,
  CoreLink,
  CoreSpan,
  coreUseNavigate
} from "@wrappid/core";
import corePackage from "@wrappid/core/package.json";
// eslint-disable-next-line import/no-unresolved
import nativePackage from "@wrappid/native/package.json";
import stylesPackage from "@wrappid/styles/package.json";

import AppComponentSection from "./AppComponentSection";
import packageJson from "../../package.json";
import logo from "../resources/images/logo_dark.png";

nativePackage.author;
stylesPackage.author;

function AppComponentContent() {
  const navigate = coreUseNavigate();
  const handleClick1 = () => {
    navigate("/guide/styles");
  };
  const handleClick2 = () => {
    navigate("/guide/components");
  };
  // Capitalize all first letters of words
  const words = packageJson.name.replaceAll("-", " ").split(" ");
  // Join the capitalized words back with spaces
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return (
    <CoreContainer>
      <CoreCssBaseline />

      {/* Wrappid logo and other details */}
      <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.HEIGHT.MIN_VH_75]}>
        {/* Extra space for the navbar_overlapping_logo isssue */}
        <CoreBox height={100}/>

        {/* application Logo */}
        <CoreBox
          gridProps={{ gridSize: { md: 3 }, styleClasses: [CoreClasses.TEXT.TEXT_CENTER] }}
          
        >
          <CoreImage
            width={"200"}
            height={"200"}
            src={logo}
            alt="logo" />
        </CoreBox>

        <CoreBox
          gridProps={{
            gridSize    : { md: 5 },
            styleClasses: [CoreClasses.ALIGNMENT.ALIGN_SELF_CENTER],
          }}
          
        >
          {/* application title */}
          <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>
            <CoreH3>{capitalizedWords.join(" ")}</CoreH3>

            {/* application About */}
            <CoreH5>
              {packageJson.description
                ? packageJson.description
                : "Description not provided"}
            </CoreH5>
          </CoreBox>
        </CoreBox>

        <CoreDivider />

        {/* wrappid tagline, version and links */}
        <CoreBox>
          {/* wrappid tagline */}
          <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>
            <CoreH5>
              Built with Wrappid. One code, Endless possibilities.
            </CoreH5>
          </CoreBox>

          {/* wrappid Related links (Release Notes|Attributions|Contributors|Issue Board) */}
          <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>
            <CoreSpan>{`Version: ${packageJson.version}`}</CoreSpan>

            <CoreBox
              styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_ROW, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_CONTENT_CENTER]}
            >
              <CoreLink>Release Notes</CoreLink>

              <CoreSpan>{" | "}</CoreSpan>

              <CoreLink>Attributions</CoreLink>

              <CoreSpan>{" | "}</CoreSpan>

              <CoreLink>Contributors</CoreLink>

              <CoreSpan>{" | "}</CoreSpan>

              <CoreLink>Issue Board</CoreLink>
            </CoreBox>
          </CoreBox>
        </CoreBox>

        {/* buttons for related links */}
        <CoreGrid
          rowSpacing="8"
          gridProps={{ gridSize: { md: 6, sm: 6, xs: 10 } }}
        >
          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            onClick={handleClick1}
          >
            How to Customize
          </CoreContainedButton>

          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            onClick={handleClick2}
          >
            Learn more
          </CoreContainedButton>

          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            href={"https://github.com/wrappid"}
          >
            Source
          </CoreContainedButton>
        </CoreGrid>
      </CoreGrid>

      <CoreDivider styleClasses={[CoreClasses.PADDING.PT5]} />

      {/* Wrappid features and other details segmented into sections */}

      <CoreBox>
        {/* Wrappid styles section */}
        
        <AppComponentSection
          title="Styles Library"
          about="It integrates seamlessly with popular styling libraries, using MUI for web styling and React Native Paper for mobile styling, ensuring a consistent look and feel across platforms."
          name={stylesPackage.name}
          version={stylesPackage.version}
          mainPath="/guide/styles"
        />

        {/* Wrappid Custom Component Flexibility Section section */}
        
        <AppComponentSection
          title="Custom Component Flexibility"
          about="While you can leverage the CoreComponents, Wrappid also gives you the flexibility to create your own custom components as needed to tailor your applications to specific requirements."
          name={corePackage.name}
          version={corePackage.version}
          mainPath="/guide/components"
        />

        {/* Wrappid native section */}
        
        <AppComponentSection
          title="Full-Stack Development Support"
          about="Wrappid supports building both frontend and backend components of applications, including API middleware, database handling, and business-specific modules."
          name={nativePackage.name}
          version={nativePackage.version}
          mainPath="/guide/styles"
          learnMorePath="/guide/components"
          sourcePath="https://github.com/wrappid"
        />

        {/* wrappid layout section */}
        
        <AppComponentSection
          title="Create Layouts"
          about="You can create layouts and use multiple layouts to style your page"
        />

        {/* wrappid themes section */}
        
        <AppComponentSection
          title="Themes"
          about="This is a theme viewer"
          mainPath="/theme/createTheme"
        />
      </CoreBox>
    </CoreContainer>
  );
}

export default AppComponentContent;
