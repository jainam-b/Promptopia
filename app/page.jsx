import Feed from "@components/Feed";
// import Form from "@components/Form";
// import Profile from "@components/Profile";
// import PromptCard from "@components/PromptCard";
// import Provider from "@components/Provider";

const Home = () => {
  return (
    <section className=" w-full  flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed/>
    </section>
  );
};

export default Home;
