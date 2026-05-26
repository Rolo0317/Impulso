import { Module } from "@nestjs/common";
import { ThrottlerModule } from "@nestjs/throttler";
import { LeadsModule } from "./leads/leads.module";
import { PropiedadesModule } from "./propiedades/propiedades.module";

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 60
      }
    ]),
    LeadsModule,
    PropiedadesModule
  ]
})
export class AppModule {}
