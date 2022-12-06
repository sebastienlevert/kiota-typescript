import {SimulationReportOverview} from './index';
import {serializeRecommendedAction} from './serializeRecommendedAction';
import {serializeSimulationEventsContent} from './serializeSimulationEventsContent';
import {serializeTrainingEventsContent} from './serializeTrainingEventsContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationReportOverview(writer: SerializationWriter, simulationReportOverview: SimulationReportOverview | undefined = {}) : void {
            writer.writeStringValue("@odata.type", simulationReportOverview.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("recommendedActions", simulationReportOverview.recommendedActions as any, serializeRecommendedAction);
            writer.writeNumberValue("resolvedTargetsCount", simulationReportOverview.resolvedTargetsCount);
            writer.writeObjectValueFromMethod("simulationEventsContent", simulationReportOverview.simulationEventsContent as any, serializeSimulationEventsContent);
            writer.writeObjectValueFromMethod("trainingEventsContent", simulationReportOverview.trainingEventsContent as any, serializeTrainingEventsContent);
}
