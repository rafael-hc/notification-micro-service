import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  @EventPattern('notifications.send-notification')
  async handleSendNotification() {
    console.log('asd');
  }
}
