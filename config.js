module.exports = {
    app: {
        px: 'XXX',
        token: 'OTA1NjIyNTQ5NTQ1NzYyOTA3.YYMwuQ.XsF8JP5aWMoBfjT78RbYzYItS4c',
        playing: 'Pavri Ho Rhi Hai 100+'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ Babu Gana Bajadey',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
