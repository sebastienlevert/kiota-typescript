import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GovernanceInsight extends Entity, Partial<Parsable> {
    /** Indicates when the insight was created. */
    insightCreatedDateTime?: Date;
}
