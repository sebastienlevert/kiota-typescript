import {Entity, Simulation, SimulationAutomation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttackSimulationRoot extends Entity, Partial<Parsable> {
    /** Represents simulation automation created to run on a tenant. */
    simulationAutomations?: SimulationAutomation[];
    /** Represents an attack simulation training campaign in a tenant. */
    simulations?: Simulation[];
}
