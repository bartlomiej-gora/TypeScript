import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const customMap = new CustomMap("map");
customMap.addMarker(user);

const company = new Company();
customMap.addMarker(company);
