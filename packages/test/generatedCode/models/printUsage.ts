import {Entity} from './index';
import {DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsage extends Entity, Partial<Parsable> {
    /** The completedBlackAndWhiteJobCount property */
    completedBlackAndWhiteJobCount?: number;
    /** The completedColorJobCount property */
    completedColorJobCount?: number;
    /** The incompleteJobCount property */
    incompleteJobCount?: number;
    /** The usageDate property */
    usageDate?: DateOnly;
}
