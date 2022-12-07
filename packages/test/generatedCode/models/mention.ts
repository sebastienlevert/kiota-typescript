import {EmailAddress, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Mention extends Entity, Partial<Parsable> {
    /** The name of the application where the mention is created. Optional. Not used and defaulted as null for message. */
    application?: string;
    /** A unique identifier that represents a parent of the resource instance. Optional. Not used and defaulted as null for message. */
    clientReference?: string;
    /** The createdBy property */
    createdBy?: EmailAddress;
    /** The date and time that the mention is created on the client. */
    createdDateTime?: Date;
    /** A deep web link to the context of the mention in the resource instance. Optional. Not used and defaulted as null for message. */
    deepLink?: string;
    /** The mentioned property */
    mentioned?: EmailAddress;
    /** Optional. Not used and defaulted as null for message. To get the mentions in a message, see the bodyPreview property of the message instead. */
    mentionText?: string;
    /** The date and time that the mention is created on the server. Optional. Not used and defaulted as null for message. */
    serverCreatedDateTime?: Date;
}
