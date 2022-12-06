import {UserAgent} from './index';
import {ServiceRole} from './serviceRole';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceUserAgent extends Partial<Parsable>, UserAgent {
    /** The role property */
    role?: ServiceRole;
}
