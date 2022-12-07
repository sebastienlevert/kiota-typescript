import {TeamInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AssociatedTeamInfo extends Partial<Parsable>, TeamInfo {
}
