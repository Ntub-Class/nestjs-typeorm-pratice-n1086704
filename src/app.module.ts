import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(ormconfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
