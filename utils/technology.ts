import { Technology } from "types/technology";
import { TECHNOLOGIES } from "constants/technology";

const exportTechnologies = (ids: string[]): Technology[] => {
  return TECHNOLOGIES.filter((technology) => ids.includes(technology.id));
};

export { exportTechnologies };
