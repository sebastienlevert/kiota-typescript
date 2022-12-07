import {ApprovalStep, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Approval extends Entity, Partial<Parsable> {
    /** The steps property */
    steps?: ApprovalStep[];
}
