import React from "react";
import Bird from "./Bird";
const App = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <Bird
        image="https://png.pngtree.com/thumb_back/fw800/background/20240421/pngtree-a-majestic-phoenix-reborn-from-digital-ashes-in-blaze-of-holographic-image_15718209.jpg"
        name="Pheonix"
        about="The phoenix is a mythical bird that symbolizes immortality,
        resurrection, and life after death."
        aboutMore=" In Greek, Egyptian, and Persian mythology, the phoenix is associated
          with the sun and is said to be reborn from its own ashes."
      />

      <Bird
        image="https://lh6.googleusercontent.com/GzsNvjnATTuMPf16VJm_JwRQDLrFA6pa7i_gAjC9CNwdjTD7qEsAk3ShPVvld_HsupBK_ueb_dMHQn-zpRpTSHfvl6e3K61vMI9Sfbqnh5ZbqBQtBaWqr6durY1ZYowUiS7D0uvBw_YzuXQNWaQsQalLBMCqecWYZCWe-6GvdNF7GcTbUPtbIfxqqB_GOw"
        name="Spix Macaw"
        about="Spix's macaw, also known as the little blue macaw, is a macaw species that was endemic to Brazil. It is a member of tribe Arini in the subfamily Arinae, part of the family Psittacidae."
        aboutMore=" Blue macaws are listed as “vulnerable – decreasing” on the Red List of the International Union for Conservation of Nature (IUCN). According to them, there are approximately 4,300 left in the wild, and that number is declining."
      />

      <Bird
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gelbwangenkakadu_8559.jpg/640px-Gelbwangenkakadu_8559.jpg"
        name="Cacatua"
        about="Cacatua is a genus of cockatoos found from the Philippines, Indonesia, Papua New Guinea, Solomon Islands to Australia. They have a primarily white plumage, an expressive crest, and a black or pale bill"
        aboutMore=" They have a primarily white plumage (in some species tinged pinkish or yellow), an expressive crest, and a black (subgenus Cacatua) or pale (subgenus Licmetis) bill. "
      />

      <Bird
        image="https://www.allaboutbirds.org/guide/assets/og/615440810-1200px.jpg"
        name="BlueBird"
        about="The bluebirds are a North American group of medium-sized, mostly insectivorous or omnivorous birds in the order of Passerines in the genus Sialia of the thrush family."
        aboutMore="Bluebirds are one of the few thrush genera in the Americas. Bluebirds lay an average of 4 to 6 eggs per clutch."
      />
    </section>
  );
};

export default App;
