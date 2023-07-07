/* eslint-disable id-length */
import { DataFromPlugins, OptionalIfEmpty, Plugin, TaskFunction } from "./types";

export function Jupe<P extends Plugin<Data>[], Data = DataFromPlugins<P>>(pluginArray: [...P]) {
  // Task
  function $<TaskArgs extends unknown[], TaskReturnType>(
    task: TaskFunction<TaskArgs, TaskReturnType>,
    data: OptionalIfEmpty<Data>
  ): TaskFunction<TaskArgs, Promise<TaskReturnType>> {
    return async (...args) => {
      type PluginWrap = () => TaskReturnType;
      let pluginWrap: PluginWrap = () => task(...args);

      // Initialize Plugins
      for (const plugin of pluginArray as unknown as Plugin<Data, TaskReturnType>[]) {
        pluginWrap = plugin.bind({}, pluginWrap, data);
      }

      // Execute Task
      const result = await pluginWrap();
      return result;
    };
  }

  return { $ };
}
