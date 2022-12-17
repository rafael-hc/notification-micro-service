import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notifications.controller';
import { KafkaConsumerService } from './kafka-consumer.service';

@Module({
  imports: [],
  providers: [KafkaConsumerService],
  controllers: [NotificationController],
})
export class MessagingModule {}
