import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { PropiedadesService } from "./propiedades.service";

@Controller("propiedades")
export class PropiedadesController {
  constructor(private readonly propiedadesService: PropiedadesService) {}

  @Get()
  findAll() {
    return this.propiedadesService.findAll();
  }

  @Get(":slug")
  findBySlug(@Param("slug") slug: string) {
    const property = this.propiedadesService.findBySlug(slug);

    if (!property) {
      throw new NotFoundException("Propiedad no encontrada");
    }

    return property;
  }
}
