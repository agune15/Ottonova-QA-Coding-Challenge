import axios from "axios";
import { expect } from "chai";
import nock from "nock";

describe("PokeAPI Tests", () => {
  it("should get Pikachu details and validate response", async () => {
    // Step 1: Send a GET request for ‘pikachu’
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );

    // Step 2: Assert the response status
    expect(response.status).to.equal(200);

    // Step 3: Assert that the response is for a pokemon named ‘pikachu’ and his ability ‘lightning-rod’ is complete
    expect(response.data.name).to.equal("pikachu");
    const hasLightningRod = response.data.abilities.some(
      (ability) => ability.ability.name === "lightning-rod"
    );
    expect(hasLightningRod).to.be.true;
  });

  it("should return 404 for modified Charmander request", async () => {
    // Step 1: Mock API response for ‘charmander’
    nock("https://pokeapi.co").get("/api/v2/pokemon/charmander").reply(404);

    // Step 2: Send a GET request for ‘charmander’ and assert the response status
    try {
      await axios.get("https://pokeapi.co/api/v2/pokemon/charmander");
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });
});
