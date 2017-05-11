initSidebarItems({"enum":[["ActivatePipelineError","Errors returned by ActivatePipeline"],["AddTagsError","Errors returned by AddTags"],["CreatePipelineError","Errors returned by CreatePipeline"],["DeactivatePipelineError","Errors returned by DeactivatePipeline"],["DeletePipelineError","Errors returned by DeletePipeline"],["DescribeObjectsError","Errors returned by DescribeObjects"],["DescribePipelinesError","Errors returned by DescribePipelines"],["EvaluateExpressionError","Errors returned by EvaluateExpression"],["GetPipelineDefinitionError","Errors returned by GetPipelineDefinition"],["ListPipelinesError","Errors returned by ListPipelines"],["PollForTaskError","Errors returned by PollForTask"],["PutPipelineDefinitionError","Errors returned by PutPipelineDefinition"],["QueryObjectsError","Errors returned by QueryObjects"],["RemoveTagsError","Errors returned by RemoveTags"],["ReportTaskProgressError","Errors returned by ReportTaskProgress"],["ReportTaskRunnerHeartbeatError","Errors returned by ReportTaskRunnerHeartbeat"],["SetStatusError","Errors returned by SetStatus"],["SetTaskStatusError","Errors returned by SetTaskStatus"],["ValidatePipelineDefinitionError","Errors returned by ValidatePipelineDefinition"]],"struct":[["ActivatePipelineInput","<p>Contains the parameters for ActivatePipeline.</p>"],["ActivatePipelineOutput","<p>Contains the output of ActivatePipeline.</p>"],["AddTagsInput","<p>Contains the parameters for AddTags.</p>"],["AddTagsOutput","<p>Contains the output of AddTags.</p>"],["CreatePipelineInput","<p>Contains the parameters for CreatePipeline.</p>"],["CreatePipelineOutput","<p>Contains the output of CreatePipeline.</p>"],["DataPipelineClient","A client for the AWS Data Pipeline API."],["DeactivatePipelineInput","<p>Contains the parameters for DeactivatePipeline.</p>"],["DeactivatePipelineOutput","<p>Contains the output of DeactivatePipeline.</p>"],["DeletePipelineInput","<p>Contains the parameters for DeletePipeline.</p>"],["DescribeObjectsInput","<p>Contains the parameters for DescribeObjects.</p>"],["DescribeObjectsOutput","<p>Contains the output of DescribeObjects.</p>"],["DescribePipelinesInput","<p>Contains the parameters for DescribePipelines.</p>"],["DescribePipelinesOutput","<p>Contains the output of DescribePipelines.</p>"],["EvaluateExpressionInput","<p>Contains the parameters for EvaluateExpression.</p>"],["EvaluateExpressionOutput","<p>Contains the output of EvaluateExpression.</p>"],["Field","<p>A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.</p>"],["GetPipelineDefinitionInput","<p>Contains the parameters for GetPipelineDefinition.</p>"],["GetPipelineDefinitionOutput","<p>Contains the output of GetPipelineDefinition.</p>"],["InstanceIdentity","<p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html\">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p>"],["ListPipelinesInput","<p>Contains the parameters for ListPipelines.</p>"],["ListPipelinesOutput","<p>Contains the output of ListPipelines.</p>"],["Operator","<p>Contains a logical operation for comparing the value of a field with a specified value.</p>"],["ParameterAttribute","<p>The attributes allowed or specified with a parameter object.</p>"],["ParameterObject","<p>Contains information about a parameter object.</p>"],["ParameterValue","<p>A value or list of parameter values. </p>"],["PipelineDescription","<p>Contains pipeline metadata.</p>"],["PipelineIdName","<p>Contains the name and identifier of a pipeline.</p>"],["PipelineObject","<p>Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.</p>"],["PollForTaskInput","<p>Contains the parameters for PollForTask.</p>"],["PollForTaskOutput","<p>Contains the output of PollForTask.</p>"],["PutPipelineDefinitionInput","<p>Contains the parameters for PutPipelineDefinition.</p>"],["PutPipelineDefinitionOutput","<p>Contains the output of PutPipelineDefinition.</p>"],["Query","<p>Defines the query to run against an object.</p>"],["QueryObjectsInput","<p>Contains the parameters for QueryObjects.</p>"],["QueryObjectsOutput","<p>Contains the output of QueryObjects.</p>"],["RemoveTagsInput","<p>Contains the parameters for RemoveTags.</p>"],["RemoveTagsOutput","<p>Contains the output of RemoveTags.</p>"],["ReportTaskProgressInput","<p>Contains the parameters for ReportTaskProgress.</p>"],["ReportTaskProgressOutput","<p>Contains the output of ReportTaskProgress.</p>"],["ReportTaskRunnerHeartbeatInput","<p>Contains the parameters for ReportTaskRunnerHeartbeat.</p>"],["ReportTaskRunnerHeartbeatOutput","<p>Contains the output of ReportTaskRunnerHeartbeat.</p>"],["Selector","<p>A comparision that is used to determine whether a query should return this object.</p>"],["SetStatusInput","<p>Contains the parameters for SetStatus.</p>"],["SetTaskStatusInput","<p>Contains the parameters for SetTaskStatus.</p>"],["SetTaskStatusOutput","<p>Contains the output of SetTaskStatus.</p>"],["Tag","<p>Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline. For more information, see <a href=\"http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html\">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>"],["TaskObject","<p>Contains information about a pipeline task that is assigned to a task runner.</p>"],["ValidatePipelineDefinitionInput","<p>Contains the parameters for ValidatePipelineDefinition.</p>"],["ValidatePipelineDefinitionOutput","<p>Contains the output of ValidatePipelineDefinition.</p>"],["ValidationError","<p>Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.</p>"],["ValidationWarning","<p>Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.</p>"]],"trait":[["DataPipeline","Trait representing the capabilities of the AWS Data Pipeline API. AWS Data Pipeline clients implement this trait."]],"type":[["AttributeNameString",""],["AttributeValueString",""],["Boolean",""],["CancelActive",""],["ErrorMessage",""],["FieldList",""],["FieldNameString",""],["FieldStringValue",""],["Id",""],["IdList",""],["Int",""],["LongString",""],["OperatorType",""],["ParameterAttributeList",""],["ParameterObjectList",""],["ParameterValueList",""],["PipelineDescriptionList",""],["PipelineList",""],["PipelineObjectList",""],["PipelineObjectMap",""],["SelectorList","<p>The list of Selectors that define queries on individual fields.</p>"],["StringList",""],["TagKey",""],["TagList",""],["TagValue",""],["TaskId",""],["TaskStatus",""],["Timestamp",""],["ValidationErrors",""],["ValidationMessage",""],["ValidationMessages",""],["ValidationWarnings",""]]});