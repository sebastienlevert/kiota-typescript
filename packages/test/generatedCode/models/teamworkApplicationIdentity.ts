import {Identity} from './index';
import {TeamworkApplicationIdentityType} from './teamworkApplicationIdentityType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkApplicationIdentity extends Identity, Partial<Parsable> {
    /** Type of application that is referenced. Possible values are: aadApplication, bot, tenantBot, office365Connector, outgoingWebhook, and unknownFutureValue. */
    applicationIdentityType?: TeamworkApplicationIdentityType;
}
