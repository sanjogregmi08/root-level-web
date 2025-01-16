import React from "react";

const TechnicalInterviewSection = () => {
  return (
    <div className="flex gap-10 px-12">
      <div className="flex pl-20">
        <h1 className="text-3xl font-semibold text-gray-900">
          Technical Interviews
        </h1>
      </div>
      <div className="flex flex-1 pr-20 pb-16">
        <p>
          {`The novel challenges we think about at Anthropic demand diverse
          expertise and perspectives. Our interview process is designed to
          identify thoughtful candidates who bring unique strengths to our
          multidisciplinary team. If you think this may describe you, we’d love
          to hear from you regardless of your background or experience.`}
          <br />
          <br />
          {`One of the most common questions we get is about whether it is
           worth applying to work at Root Level if you have not worked on modern
            machine learning systems in the past. Yes! For some roles, Ml experience 
            is expected, but many technical staff have arrived at Root Level with 
            no machine learning experience. If you aren’t sure about the ML experience
             needed for your role, ask your recruiter`}
          <br />
          <br />
          {`Our interviews are centered on programming and take place in collaborative
           spaces such as Replit and Colab. In addition to expecting you to create, run,
            and debug your solutions, we'll be particularly interested in how you approach 
            each challenge and weigh the trade-offs between potential answers. Although you
            will have the same access to documentation and the internet as usual (which
            is why we will ask you to share your screen during each interview), it is
            still necessary to be familiar with the fundamental syntax, standard libraries,
            and common idioms of the language you are interviewing in so that searching for
            information won't take up too much time. In addition to non-technical questions
            about your background and motivations, you will, of course, have time during the interview.`}
        </p>
      </div>
    </div>
  );
};

export default TechnicalInterviewSection;
