export const Styles = {
  mainDiv: "mx-[20px] sm:mx-[50px] lg:mx-[80px]",
  gradientText: "gradient nosifer",
  header:
    "mx-[20px] sm:mx-[50px] lg:mx-[80px] py-[15px] sm:py-[30px] text-white flex items-center justify-between",
  logo: "text-[23px] xs:text-[27px] text-white tracking-[0.010em] nosifer",
  navbar: "hidden lg:flex items-center gap-8",
  links: "text-[15px] font-medium tracking-wider relative link",
  heroTitle:
    "nosifer text-[1.4rem] sm:text-[2rem] md:text-[2.3rem] w-full max-w-[800px] mx-auto text-center",
  heroSubtitle: "text-[13px] sm:text-[15px] text-center mt-[1rem] mb-[1.5rem]",
  blurCircle:
    "absolute w-[120px] md:w-[250px] h-[120px] md:h-[250px] opacity-[.5] blur-[60px] -z-[1]",
  animationSection:
    "mt-[3rem] md:mt-[5rem] flex flex-col gap-[.5rem] xs:gap-[1rem]",
  title: "nosifer text-[1.3rem] sm:text-[1.8rem] text-center",
  gamesSection: "my-[3rem] md:my-[5rem] relative",
  gamesRow: "hidden lg:flex flex-wrap justify-center gap-5",
  gameCard:
    "w-[130px] xs:w-[150px] md:w-[175px] h-[180px] xs:h-[220px] md:h-[250px] rounded-[7px] border-[rgba(255,255,255,0.7)] object-cover border-t-2 border-l-2 hover:scale-105 transition-all",
  smallScreenGames: "lg:hidden flex flex-wrap justify-center gap-5",
  viewContainer: "mt-[2rem] sm:mt-[3rem] max-w-[960px] mx-auto",
  view: "flex items-center gap-2 hover:gap-5 transition-all gradient font-medium tracking-wide relative view",
  details:
    "flex flex-wrap justify-center md:justify-evenly gap-x-20 gap-y-10 md:gap-0 items-center bg-gray px-5 py-10",
  poweredCard:
    "flex flex-wrap justify-center gap-5 sm:gap-10 my-[2rem] md:my-[3rem]",
  adventureContainer:
    "grid place-items-center lg:flex items-center justify-center gap-8 lg:gap-16 mt-[2rem] md:mt-[3rem]",
  adventureImage:
    "sm:w-[160px] sm:h-[160px] object-cover rounded-[10px] sm:rotate-6 shadow-custom",
  adventureTitle:
    "font-semibold text-[1.1rem] sm:text-[25px] md:text-[30px] text-center tracking-wide",
  adventureText:
    "mt-[.5rem] mb-[1rem] sm:mb-[2rem] text-[12px] xs:text-[14px] text-justify",
  gameListSliderCol1:
    "hidden md:block col-span-4 bg-gray rounded-[8px] h-[250px] lg:h-[300px] xl:h-[350px] overflow-hidden",
  gameListSliderCol2:
    "col-span-12 md:col-span-8 bg-gray rounded-[8px] overflow-hidden relative",
  gameListSliderTitle:
    "hidden xs:block absolute bottom-5 start-5 rounded-[10px] p-5 backdrop-blur-[3px] max-w-[400px] bg-[rgba(12,12,12,.8)] shadow-lg",
  footer:
    "grid place-items-center gap-2 text-center text-white bg-gray px-5 py-10 text-[14px]",
  loadMoreButton:
    "bg-gradient-to-r from-gradient-start to bg-gradient-stop py-[5px] w-[250px] text-[15px] font-semibold tracking-wide rounded-[3px] border-l-[1px] border-t-[1px] border-[rgba(255,255,255,.5)]",
  card: "col-span-12 xsm:col-span-6 md:col-span-4 lg:col-span-3 h-[300px] rounded-[5px] overflow-hidden relative ",
  devCard:
    "min-w-[200px] h-[270px] bg-white rounded-[5px] overflow-hidden relative",
  devCardParagraph:
    "absolute z-[2] bottom-0 w-full bg-[rgba(0,0,0,.4)] backdrop-blur-[3px] p-3 font-semibold text-[15px] truncate",
  devCardNA:
    "w-full h-full bg-gray font-semibold grid place-items-center text-[25px]",
  gameCardContainer:
    "col-span-12 xsm:col-span-6 md:col-span-4 lg:col-span-3 group cursor-pointer",
  gameCardDiv:
    "relative rounded-[5px] overflow-hidden h-[200px] shadow-md group-hover:scale-105 transition-all",
  gameCardText:
    "flex items-center gap-1 justify-between absolute bottom-0 bg-[rgba(0,0,0,.6)] backdrop-blur-[2px] w-full py-3 px-3",
  loader:
    "border-[4px] border-[rgba(255,255,255,0.5)] border-l-transparent rounded-full animate-spin w-[40px] h-[40px] mx-auto",
};

export const gameSliderStyle = {
  sliderSection: "bg-black relative mt-[3rem] md:mt-[5rem]",
  container:
    "lg:flex items-center gap-5 text-[12px] sm:text-[14px] lg:text-[16px]",
  image:
    "w-full lg:w-[50%] h-[200px] sm:h-[350px] lg:h-[450px] object-cover details",
  name: "nosifer text-[1rem] sm:text-[1.5rem]",
  genre: "gradient-border px-5 py-1",
  description: "my-2 text-[12px] lg:text-[14px] text-justify",
  info: "flex items-center bg-gray rounded-[5px]",
  infoIcon: "text-[38px] bg-[#444] p-2 rounded-l-[5px]",
  platform: "flex items-center gap-3",
  platformIcon:
    "w-[40px] h-[40px] bg-gray rounded-full grid place-items-center",
};

export const navigationStyle = {
  container:
    "flex flex-wrap gap-y-5 items-end justify-between mx-[20px] sm:mx-[50px] lg:mx-[80px] py-5 sm:py-10",
  column: "flex flex-col gap-3",
  title: "text-[28px] font-bold tracking-wider",
  note: "mt-1 text-[#9C9B9B] text-[15px] font-medium",
  searchBarDiv: "min-w-full xs:min-w-[320px] flex items-center gap-5",
};

export const gameDetailsStyle = {
  backgroundImage:
    "absolute top-0 -z-[1] w-full h-screen object-cover opacity-[.3]",
  main: "my-[1rem] xl:my-[3.5rem] text-white min-h-[80vh]",
  mainDiv: "px-[20px] sm:px-[50px] lg:px-[80px]",
  heroTitle: "nosifer text-[30px] sm:text-[35px] tracking-wide",
  details: "flex flex-col gap-3 mt-3 text-[15px] sm:text-[18px]",
  description:
    "bg-black p-5 text-justify text-[15px] rounded-[10px] mt-5 md:mt-[3rem] shadow-lg shadow-gray",
  sliderDiv: "mx-[20px] lg:mx-[70px] xl:mx-[200px] mt-5 md:mt-10",
  sliderImage:
    "w-[280px] md:w-[400px] h-[150px] md:h-[225px] rounded-[10px] object-cover",
  similarGamesDiv:
    "min-w-[300px] h-[200px] bg-gray relative overflow-hidden rounded-[5px]",
  gameName:
    "absolute z-[2] bottom-0 w-full bg-[rgba(0,0,0,.4)] backdrop-blur-[3px] p-3 font-semibold text-[15px] truncate",
};
