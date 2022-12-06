import {Entity, WorkforceIntegration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Teamwork extends Entity, Partial<Parsable> {
    /** The workforceIntegrations property */
    workforceIntegrations?: WorkforceIntegration[];
}
