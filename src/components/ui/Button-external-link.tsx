import React from "react";
import { Link, Button } from "@nextui-org/react";

export default function ExternalButton() {
  return (
    <Button
      href="https://wiki-science.com/"
      as={Link}
      color="primary"
      showAnchorIcon
      variant="solid"
      className="mt-24 mb-32"
    >
      View Site
    </Button>
  );
}
