import React from "react";
import { useParams } from "react-router-dom";

export default function AboutPages() {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello {name ?? "Anonymus"}</h1>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
        perferendis aliquam nesciunt dicta sit sapiente odio! Expedita aliquam
        obcaecati eaque, porro, rerum veniam ut temporibus atque enim velit
        accusamus maiores. Sit dolores, error vitae unde alias dolor sequi
        laboriosam aperiam perspiciatis id culpa nobis ipsum delectus, impedit,
        veniam aliquam recusandae incidunt! Doloribus, modi. Odit rem animi
        porro officiis? Totam quod expedita, obcaecati earum vel commodi odio ab
        molestias esse excepturi dicta animi exercitationem labore. Eaque,
      </div>
      <div>
        voluptate et voluptatibus blanditiis ipsam facere sunt perspiciatis
        quisquam modi, cumque, ex sapiente nisi. Autem excepturi enim quis. Ea
        alias provident obcaecati itaque maxime commodi ipsum, beatae expedita
        soluta, modi porro temporibus ullam. Ducimus ad suscipit, incidunt iure
        obcaecati distinctio vero id. Incidunt ad aut odio saepe accusamus nulla
        ratione unde dolore minima debitis, nobis similique illum inventore eius
        quas obcaecati veniam voluptas. Facilis voluptate laborum magni
        asperiores provident voluptatem maiores aspernatur hic eligendi ex!
      </div>
    </div>
  );
}
