const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.destroy,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.GameRecorder,
		C3.Plugins.Share,
		C3.Plugins.Touch,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.LoadState,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SaveState,
		C3.Plugins.Share.Acts.Share
	];
};
self.C3_JsPropNameTable = [
	{平台: 0},
	{镜头跟随: 0},
	{出界销毁: 0},
	{玩家: 0},
	{实体: 0},
	{平铺图: 0},
	{牙膏: 0},
	{键盘: 0},
	{精灵3: 0},
	{精灵4: 0},
	{鼠标: 0},
	{计时器: 0},
	{窗口: 0},
	{胜利文本: 0},
	{计时器2: 0},
	{按钮: 0},
	{w3: 0},
	{文本: 0},
	{屏幕录制: 0},
	{分享: 0},
	{精灵: 0},
	{精灵2: 0},
	{精灵5: 0},
	{触控: 0},
	{时间: 0}
];

self.InstanceType = {
	玩家: class extends self.ISpriteInstance {},
	平铺图: class extends self.ITiledBackgroundInstance {},
	牙膏: class extends self.ISpriteInstance {},
	键盘: class extends self.IInstance {},
	精灵3: class extends self.ISpriteInstance {},
	精灵4: class extends self.ISpriteInstance {},
	鼠标: class extends self.IInstance {},
	计时器: class extends self.ITextInstance {},
	窗口: class extends self.ISpriteInstance {},
	胜利文本: class extends self.ITextInstance {},
	计时器2: class extends self.ITextInstance {},
	按钮: class extends self.ISpriteInstance {},
	w3: class extends self.ITextInstance {},
	文本: class extends self.ITextInstance {},
	屏幕录制: class extends self.IInstance {},
	分享: class extends self.IInstance {},
	精灵: class extends self.ISpriteInstance {},
	精灵2: class extends self.ISpriteInstance {},
	精灵5: class extends self.ISpriteInstance {},
	触控: class extends self.IInstance {}
}