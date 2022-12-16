import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'example',
      category: 'social',
      content: new Content('Nova solicitação de amizade'),
    });

    expect(notification).toBeTruthy();
  });
});
