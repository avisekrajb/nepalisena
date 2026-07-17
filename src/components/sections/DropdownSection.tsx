// src/components/sections/DropdownSection.tsx
import React from "react";
import { Container } from "../ui/Section";

interface DropdownSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function DropdownSection({ title, children, className = "" }: DropdownSectionProps) {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-army mb-8 text-center">{title}</h2>
        <div className="max-w-4xl mx-auto">{children}</div>
      </Container>
    </section>
  );
}
