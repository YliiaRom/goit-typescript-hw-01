type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  T extends Pick<AllType, "name" | "color">,
  S extends Pick<AllType, "position" | "weight">
>(top: T, bottom: S): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const top: Pick<AllType, "name" | "color"> = {
  name: "x",
  color: "#fff",
};

const bottom: Pick<AllType, "position" | "weight"> = {
  position: 20,
  weight: 20,
};

// const result = compare(top, bottom);
