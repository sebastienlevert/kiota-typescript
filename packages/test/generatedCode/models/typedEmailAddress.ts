import {EmailType} from './emailType';
import {EmailAddress} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TypedEmailAddress extends EmailAddress, Partial<Parsable> {
    /** To specify a custom type of email address, set type to other, and assign otherLabel to a custom string. For example, you may use a specific email address for your volunteer activities. Set type to other, and set otherLabel to a custom string such as Volunteer work. */
    otherLabel?: string;
    /** The type property */
    type?: EmailType;
}
