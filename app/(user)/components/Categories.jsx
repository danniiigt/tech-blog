"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";

export const Categories = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-hidden");
    let isScrolling = false;
    let startX = 0;
    let scrollLeft = 0;

    scrollContainer.addEventListener("mousedown", (e) => {
      isScrolling = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.classList.add("cursor-grabbing");
    });

    scrollContainer.addEventListener("mouseleave", () => {
      isScrolling = false;
      scrollContainer.classList.remove("cursor-grabbing");
    });

    scrollContainer.addEventListener("mouseup", () => {
      isScrolling = false;
      scrollContainer.classList.remove("cursor-grabbing");
    });

    scrollContainer.addEventListener("mousemove", (e) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = x - startX; // Ajusta la velocidad de desplazamiento
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <Tabs defaultValue="todo" className="tabs-container">
      <TabsList className="w-full block scroll-hidden justify-between">
        <div className="scroll-content flex gap-1">
          <TabsTrigger
            value="todo"
            className="
              hover:bg-background/60
              transition
              duration-200
            "
          >
            Todo
          </TabsTrigger>
          <TabsTrigger
            value="web"
            className="
              hover:bg-background/60
              transition
              duration-200
            "
          >
            Web
          </TabsTrigger>
          <TabsTrigger
            value="ia"
            className="
              hover:bg-background/60
              transition
              duration-200"
          >
            IA
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="apps"
          >
            Aplicaciones móviles
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="iot"
          >
            IoT
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="ciberseguridad"
          >
            Ciberseguridad
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="bigdata"
          >
            Big Data
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="blockchain"
          >
            Blockchain
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="ml"
          >
            Machine Learning
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="robotica"
          >
            Robótica
          </TabsTrigger>

          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="seguridad"
          >
            Seguridad informática
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="devops"
          >
            DevOps
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="redes"
          >
            Redes y comunicaciones
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="cloud"
          >
            Computación en la nube
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="vr"
          >
            Realidad virtual
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="ar"
          >
            Realidad aumentada
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="drones"
          >
            Drones
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="automatizacion"
          >
            Automatización
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="sistemas"
          >
            Sistemas operativos
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="dispositivos"
          >
            Dispositivos electrónicos
          </TabsTrigger>
          <TabsTrigger
            className="
              hover:bg-background/60
              transition
              duration-200
            "
            value="ciencia"
          >
            Ciencia y tecnología
          </TabsTrigger>
        </div>
      </TabsList>
    </Tabs>
  );
};
