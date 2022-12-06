import {EmailIdentity, Entity, SimulationAutomationRun} from './index';
import {SimulationAutomationStatus} from './simulationAutomationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationAutomation extends Entity, Partial<Parsable> {
    /** Identity of the user who created the attack simulation automation. */
    createdBy?: EmailIdentity;
    /** Date and time when the attack simulation automation was created. */
    createdDateTime?: Date;
    /** Description of the attack simulation automation. */
    description?: string;
    /** Display name of the attack simulation automation. Supports $filter and $orderby. */
    displayName?: string;
    /** Identity of the user who most recently modified the attack simulation automation. */
    lastModifiedBy?: EmailIdentity;
    /** Date and time when the attack simulation automation was most recently modified. */
    lastModifiedDateTime?: Date;
    /** Date and time of the latest run of the attack simulation automation. */
    lastRunDateTime?: Date;
    /** Date and time of the upcoming run of the attack simulation automation. */
    nextRunDateTime?: Date;
    /** A collection of simulation automation runs. */
    runs?: SimulationAutomationRun[];
    /** Status of the attack simulation automation. Supports $filter and $orderby. The possible values are: unknown, draft, notRunning, running, completed, unknownFutureValue. */
    status?: SimulationAutomationStatus;
}
