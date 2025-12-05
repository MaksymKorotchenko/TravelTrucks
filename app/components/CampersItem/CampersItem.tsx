import { Camper } from "@/types/camper";
import Link from "next/link";
import Image from "next/image";

type CampersProps = {
  campers: Camper[];
};

export default function CampersItem({ campers }: CampersProps) {
  return (
    <ul>
      {campers.map((camper) => (
        <li key={camper.name}>
          <div>
            <Image
              src={camper.gallery[0].thumb}
              alt={`${camper.name} picture`}
              width={292}
              height={320}
            ></Image>
            <h2>{camper.name}</h2>
            <span>{`€${camper.price}`}</span>
            <svg>
              <use></use>
            </svg>
            <span>{camper.rating}</span>
            <svg>
              <use></use>
            </svg>
            <span></span>
            <svg>
              <use></use>
            </svg>
            <span></span>
            <p></p>
            <ul>
              {Object.entries(camper)
                .filter(([, value]) => value === true)
                .map(([key]) => (
                  <li key={key}>{key}</li>
                ))}
            </ul>
            <Link href={`/campers/${camper.id}`}></Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
