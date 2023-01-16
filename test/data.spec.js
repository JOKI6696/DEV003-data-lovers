import data from "../src/data/ghibli/ghibli";
import {
  sortCharacters,
  sortTitles,
  filterGenders,
  filterDirector,
} from "../src/data";
const dataGhibli = data.films;
const peopleArr = dataGhibli.map((a) => a.people).flat(1);
const locationArr = dataGhibli.map((a) => a.locations).flat(1);
const vehicleArr = dataGhibli.map((a) => a.vehicles).flat(1);
describe("DataSets", () => {
  it("It´s an array of people", () => {
    expect(peopleArr[0].name).toEqual("Pazu");
  });
  it("It´s an array of Locations", () => {
    expect(locationArr[0].name).toEqual("Gondoa");
  });
  it("It´s an array of Vehicles", () => {
    expect(vehicleArr[0].name).toEqual("Air Destroyer Goliath");
  });
});
describe("Sort", () => {
  it("is a function", () => {
    expect(typeof sortCharacters).toBe("function");
  });
  it("It has to order the characters to from a to z", () => {
    const AlphabethOrderA_Z = sortCharacters(peopleArr, "a-z");
    expect(AlphabethOrderA_Z[0].name.charAt(0)).toEqual("A");
    expect(
      AlphabethOrderA_Z[AlphabethOrderA_Z.length - 1].name.charAt(0)
    ).toEqual("Ō");
  });
  it("It has to order the characters to from z to a", () => {
    const AlphabethOrderZ_A = sortCharacters(peopleArr, "z-a");
    expect(AlphabethOrderZ_A[0].name.charAt(0)).toEqual("Ō");
    expect(
      AlphabethOrderZ_A[AlphabethOrderZ_A.length - 1].name.charAt(0)
    ).toEqual("A");
  });
  it("is a function", () => {
    expect(typeof sortTitles).toBe("function");
  });
  it("It has to order the movies titles to from a to z", () => {
    const AlphabethOrderA_Z = sortTitles(dataGhibli, "a-z");
    expect(AlphabethOrderA_Z[0].title.charAt(0)).toEqual("C");
    expect(
      AlphabethOrderA_Z[AlphabethOrderA_Z.length - 1].title.charAt(0)
    ).toEqual("W");
  });
  it("It has to order the movies titles to from z to a", () => {
    const AlphabethOrderZ_A = sortTitles(dataGhibli, "z-a");
    expect(AlphabethOrderZ_A[0].title.charAt(0)).toEqual("W");
    expect(
      AlphabethOrderZ_A[AlphabethOrderZ_A.length - 1].title.charAt(0)
    ).toEqual("C");
  });
  it("It should apear the oldest movies first", () => {
    const AlphabethOrder_First = sortTitles(dataGhibli, "first");
    const first = AlphabethOrder_First[0];
    const last = AlphabethOrder_First[AlphabethOrder_First.length - 1];
    expect(first.release_date < last.release_date).toEqual(true);
  });
  it("It should apear the newest movies first", () => {
    const AlphabethOrder_Last = sortTitles(dataGhibli, "last");
    const first = AlphabethOrder_Last[0];
    const last = AlphabethOrder_Last[AlphabethOrder_Last.length - 1];
    expect(last.release_date < first.release_date).toEqual(true);
  });
});
describe("FiltersGender", () => {
  it("is a function", () => {
    expect(typeof filterGenders).toBe("function");
  });
  it("It´s a female filter", () => {
    const FilterFemale = filterGenders(peopleArr, "Female");
    expect(FilterFemale[0].gender).toEqual("Female");
  });
  it("It´s a Male filter", () => {
    const FilterMale = filterGenders(peopleArr, "Male");
    expect(FilterMale[0].gender).toEqual("Male");
  });
});
describe("FiltersVehicles", () => {
  it("is a function", () => {
    expect(typeof filterDirector).toBe("function");
  });
  it("It´s Director is Hayao Miyazaki ", () => {
    const FilterDirectors = filterDirector(dataGhibli, "Hayao Miyazaki");
    expect(FilterDirectors[0].director).toEqual("Hayao Miyazaki");
  });
});