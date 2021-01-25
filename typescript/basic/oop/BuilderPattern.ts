export default null;

/*
Builderパターン (デザインパターン)

オブジェクトの構築と、そのオブジェクトを実際に実装する方法を分離したパターン。

*/

/*
例1: 

HttpRequestのようなオブジェクトを構築する。

*/

class RequestBuilder1 {
    private url: string | null = null;
    private method: 'get' | 'post' | null = null;
    private data: object | null = null;

    setURL(url: string): this {
        this.url = url;
        return this;
    }

    setMethod(method: 'get' | 'post'): this {
        this.method = method;
        return this;
    }

    setData(data: object): this {
        this.data = data;
        return this;
    }

    send(): void {
        const request = `method: ${this.method}, url: ${this.url}, data: ${JSON.stringify(this.data)}`;
        console.log(request);
    }
}

// メソッドを連鎖的に呼び出すことでオブジェクトを構築することができる
new RequestBuilder1().setURL('https://example.com/api').setMethod('post').setData({ userId: 1 }).send();  // method: post, url: https://example.com/api, data: {"userId":1}



/*
例2:

例1ではURLやHttpメソッド、dataを指定する前にsendメソッドを呼び出せてしまうため全く安全ではなかったので、
URL、Httpメソッド、dataを指定しないとsendメソッドを呼び出せないように変更する。


*/

class RequestBuilder2 {
    protected url: string = '';
    protected method: 'get' | 'post' = 'get';
    protected data: object | null = null;

    setURL(url: string): RequestBuilder2WithURL {
        return new RequestBuilder2WithURL().setURL(url);
    }
}

class RequestBuilder2WithURL extends RequestBuilder2 {
    setURL(url: string): this {
        this.url = url;
        return this;
    }

    setMethod(method: 'get' | 'post'): RequestBuilder2WithURLAndMethod {
        return new RequestBuilder2WithURLAndMethod().setURL(this.url).setMethod(method);
    }
}

class RequestBuilder2WithURLAndMethod extends RequestBuilder2WithURL {
    setMethod(method: 'get' | 'post'): this {
        this.method = method;
        return this;
    }

    setData(data: object): RequestBuilder2WithURLAndMethodAndData {
        return new RequestBuilder2WithURLAndMethodAndData().setURL(this.url).setMethod(this.method);
    }

}

class RequestBuilder2WithURLAndMethodAndData extends RequestBuilder2WithURLAndMethod {
    setData(data: object): this {
        this.data = data;
        return this;
    }

    send(): void {
        const request = `method: ${this.method}, url: ${this.url}, data: ${JSON.stringify(this.data)}`;
        console.log(request);
    }
}

// URL、メソッド、データを設定するとsend()が呼び出せるようになる
new RequestBuilder2().setURL('https://example.com/api').setMethod('get').setData({ userId: 2 }).send();

// new RequestBuilder2().send()  // エラー
// new RequestBuilder2().setURL('https://example.com/api').send()  // エラー
// new RequestBuilder2().setURL('https://example.com/api').setMethod('get').send()  // エラー
