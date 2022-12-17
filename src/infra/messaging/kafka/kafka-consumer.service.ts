import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['loving-coyote-10706-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bG92aW5nLWNveW90ZS0xMDcwNiRI5U_zM1VV9co9KN-WZyI9_OYPnyNIJ8lIwno',
          password:
            'Gkotqq74dPqKKp7V_NVAYXtMjcCgEkJiycPH9LG-NA-cv8LkFWQtmw5zyXTE0Htzlfa-VQ==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    this.close();
  }
}
