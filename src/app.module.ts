import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cjdvmcivvtos73b8dd7g-a.oregon-postgres.render.com',
      port: 5432,
      password: 'fXaIEcjSaAy4ivc2fPjhAR2fPWLqVNoB',
      username: 'root',
      entities: [User],
      database: 'myapp_aocr',
      synchronize: true,
      logging: true,
      extra: {
        ssl: {
          rejecUnauthorized: false,
        },
      },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
