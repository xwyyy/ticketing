import { Publisher, Subjects, TicketUpdatedEvent } from '@xwytickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
