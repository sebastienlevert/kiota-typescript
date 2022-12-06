import {IdentitySet} from '../';
import {Endpoint, UserFeedback} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantEndpoint extends Endpoint, Partial<Parsable> {
    /** The feedback provided by the user of this endpoint about the quality of the session. */
    feedback?: UserFeedback;
    /** Identity associated with the endpoint. */
    identity?: IdentitySet;
}
