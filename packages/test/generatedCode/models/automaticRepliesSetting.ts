import {AutomaticRepliesStatus} from './automaticRepliesStatus';
import {ExternalAudienceScope} from './externalAudienceScope';
import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AutomaticRepliesSetting extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The externalAudience property */
    externalAudience?: ExternalAudienceScope;
    /** The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled. */
    externalReplyMessage?: string;
    /** The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled or Scheduled. */
    internalReplyMessage?: string;
    /** The scheduledEndDateTime property */
    scheduledEndDateTime?: DateTimeTimeZone;
    /** The scheduledStartDateTime property */
    scheduledStartDateTime?: DateTimeTimeZone;
    /** The status property */
    status?: AutomaticRepliesStatus;
}
