import {RiskUserActivity, RiskyUser} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyUserHistoryItem extends Partial<Parsable>, RiskyUser {
    /** The activity related to user risk level change. */
    activity?: RiskUserActivity;
    /** The ID of actor that does the operation. */
    initiatedBy?: string;
    /** The ID of the user. */
    userId?: string;
}
