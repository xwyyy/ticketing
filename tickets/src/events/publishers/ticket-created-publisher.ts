import { Publisher, Subjects, TicketCreatedEvent } from '@xwytickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
