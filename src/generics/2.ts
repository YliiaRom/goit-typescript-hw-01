type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

export default function compare<
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

export const top: Pick<AllType, "name" | "color"> = {
  name: "x",
  color: "#fff",
};

export const bottom: Pick<AllType, "position" | "weight"> = {
  position: 20,
  weight: 20,
};

// const result = compare(top, bottom);
