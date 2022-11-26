import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const createElement = (portalId: string) => {
  const element = document.createElement("div");
  element.setAttribute("id", portalId);
  document.body.appendChild(element);
  return element;
};

const CreatePortal = ({
  children,
  portalId,
}: {
  children: ReactNode;
  portalId: string;
}) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(portalId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createElement(portalId);
    }

    setPortalElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [portalId]);

  if (!portalElement) return null;

  return createPortal(children, portalElement);
};

export default CreatePortal;
