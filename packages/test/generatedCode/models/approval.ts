import {ApprovalStage, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Approval extends Entity, Partial<Parsable> {
    /** A collection of stages in the approval decision. */
    stages?: ApprovalStage[];
}
