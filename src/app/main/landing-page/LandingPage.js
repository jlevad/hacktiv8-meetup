import React from "react";
import FooterPage from "./Footer";
import Banner from "./Banner";
import ContentPage from "./content/ContentPage";
import MeetupContent from "./content/MeetupContent";
import AboutContent from "./content/AboutContent";
import PastMeetups from "./content/PastMeetups";
import Members from "./content/Members";

const LandingPage = () => {
  return (
    <>
      <Banner
        location="Jakarta, Indonesia"
        members="1,078"
        organizer="Adhy Wiranata"
      />
      <ContentPage value="Next Meetup">
        <MeetupContent />
      </ContentPage>
      <ContentPage value="About Meetup">
        <AboutContent />
      </ContentPage>
      <ContentPage value="Members">
        <Members />
      </ContentPage>
      <ContentPage value="Past Meetups">
        <div className="grid grid-cols-3">
          <PastMeetups
            date="27 November 2017"
            content="#39 Jakarta Js April Meetup with kumparan"
            visitor="139"
          />
          <PastMeetups
            date="27 Oktober 2017"
            content="#38 Jakarta Js April Meetup with Blibli"
            visitor="113"
          />
          <PastMeetups
            date="27 November 2017"
            content="#39 Jakarta Js April Meetup with Hacktiv8"
            visitor="110"
          />
        </div>
      </ContentPage>
      <FooterPage />
    </>
  );
};

export default LandingPage;
