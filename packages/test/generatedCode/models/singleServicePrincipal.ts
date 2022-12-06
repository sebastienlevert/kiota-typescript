import {SubjectSet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SingleServicePrincipal extends Partial<Parsable>, SubjectSet {
    /** Description of this service principal. */
    description?: string;
    /** ID of the servicePrincipal. */
    servicePrincipalId?: string;
}
